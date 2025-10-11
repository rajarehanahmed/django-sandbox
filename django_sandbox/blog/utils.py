from rest_framework.exceptions import ValidationError

from django_sandbox.blog.models import Like


class PostHelper:
    @staticmethod
    def like_post(post, user, liked):
        """
        Like or unlike a post based on the liked flag in the request body
        If there is an existing active Like make it inactive for unliking otherwise
        create a new Like object.
        (inactive likes don't count - they can keep count of number of times a post was
        unliked by the user, idk if it'll be useful or not but lets hope it will
        otherwise we'll remove it)
        """
        existing_like_obj = Like.objects.active().filter(post=post, user=user).first()

        if liked:
            if existing_like_obj:
                msg = "Post already liked!"
                raise ValidationError(msg)
            Like.objects.create(post=post, user=user)
        else:
            if not existing_like_obj:
                msg = "No Existing like for this post! Can't unlike"
                raise ValidationError(msg)

            existing_like_obj.is_active = False
            existing_like_obj.save()
        return liked
