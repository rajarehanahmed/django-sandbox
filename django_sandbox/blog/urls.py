from django.urls import path
from django_sandbox.blog.api.views import PostViewSet
from rest_framework.routers import SimpleRouter

app_name = "blog"

router = SimpleRouter()

router.register("posts", PostViewSet)

urlpatterns = router.urls
