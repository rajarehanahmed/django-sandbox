from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from django_sandbox.blog.api.serializers import LikePostSerializer
from django_sandbox.blog.api.serializers import PostSerializer
from django_sandbox.blog.models import Post
from django_sandbox.blog.utils import PostHelper


class PostViewSet(ModelViewSet):
    queryset = Post.objects.active()
    serializer_class = PostSerializer
    ordering_fields = ("created", "updated", "title")

    def perform_create(self, serializer):
        """Set the author to the current authenticated user when creating a post."""
        serializer.save(author=self.request.user)

    @action(detail=True, methods=["post"], url_path="like")
    def like_unlike_post(self, request, pk=None):
        post = self.get_object()
        user = request.user

        serializer = LikePostSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        liked = serializer.validated_data["liked"]
        PostHelper.like_post(post=post, user=user, liked=liked)

        return Response(
            {
                "message": f"Post {'liked' if liked else 'unliked'} successfully",
                "liked": liked,
            },
            status=status.HTTP_200_OK if not liked else status.HTTP_201_CREATED,
        )
