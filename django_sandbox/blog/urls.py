from rest_framework.routers import SimpleRouter

from django_sandbox.blog.api.views import PostViewSet

app_name = "blog"

router = SimpleRouter()

router.register("posts", PostViewSet)

urlpatterns = router.urls
