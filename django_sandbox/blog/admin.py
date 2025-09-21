from django.contrib import admin
from django.contrib.admin import ModelAdmin

from django_sandbox.blog.models import Post


@admin.register(Post)
class PostAdmin(ModelAdmin):
    list_display = ("title", "author", "is_active")
    search_fields = ("title", "body")
    list_filter = ("author", "is_active")
    raw_id_fields = ("author",)
