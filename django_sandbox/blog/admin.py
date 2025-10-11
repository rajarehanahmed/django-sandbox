from django.contrib import admin
from django.contrib.admin import ModelAdmin
from django.db.models.query import QuerySet
from django.http.request import HttpRequest

from django_sandbox.blog.models import Comment
from django_sandbox.blog.models import Like
from django_sandbox.blog.models import Post


@admin.register(Post)
class PostAdmin(ModelAdmin):
    list_display = ("title", "author", "is_active")
    search_fields = ("title", "body")
    list_filter = ("author", "is_active")
    raw_id_fields = ("author",)


@admin.register(Comment)
class CommentAdmin(ModelAdmin):
    list_display = ("post", "author", "is_active")
    search_fields = ("comment",)
    list_filter = ("author", "is_active")
    raw_id_fields = ("author", "post")


@admin.register(Like)
class LikeAdmin(ModelAdmin):
    list_display = ("post", "user", "is_active")
    list_filter = ("is_active",)
    raw_id_fields = ("user", "post")

    def get_queryset(self, request: HttpRequest) -> QuerySet:
        return super().get_queryset(request).select_related("post", "user")
