from django.contrib.auth import get_user_model
from django.db.models import CASCADE
from django.db.models import PROTECT
from django.db.models import CharField
from django.db.models import ForeignKey
from django.db.models import Q
from django.db.models import TextField
from django.db.models import UniqueConstraint

from django_sandbox.core.models import SoftDeleteAuditableMixin

User = get_user_model()


class Post(SoftDeleteAuditableMixin):
    title = CharField(max_length=200, db_index=True)
    body = TextField()
    author = ForeignKey(User, on_delete=PROTECT)

    def __str__(self):
        return self.title


class Comment(SoftDeleteAuditableMixin):
    post = ForeignKey(Post, on_delete=PROTECT, related_name="comments")
    comment = TextField()
    author = ForeignKey(User, on_delete=PROTECT, related_name="comments")
    reply_to = ForeignKey(
        "self",
        null=True,
        blank=True,
        on_delete=CASCADE,
        related_name="replies",
    )

    def __str__(self):
        return f"Comment by {self.author} on {self.post}"


class Like(SoftDeleteAuditableMixin):
    post = ForeignKey(Post, on_delete=PROTECT, related_name="likes")
    user = ForeignKey(User, on_delete=PROTECT)

    def __str__(self):
        return f"Like by {self.user} on {self.post}"

    class Meta:
        constraints = [
            UniqueConstraint(
                fields=["post", "user"],
                name="unique_like",
                condition=Q(is_active=True),
            ),
        ]
