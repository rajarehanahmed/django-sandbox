from django_sandbox.users.api.serializers import UserSerializer
from rest_framework.serializers import ModelSerializer, BooleanField, Serializer

from django_sandbox.blog.models import Like, Post, Comment


class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class PostSerializer(ModelSerializer):
    likes = LikeSerializer(read_only=True, many=True)
    comments = CommentSerializer(read_only=True, many=True)
    author = UserSerializer(read_only=True)
    
    class Meta:
        model = Post
        fields = "__all__"


class LikePostSerializer(Serializer):
    liked = BooleanField()
