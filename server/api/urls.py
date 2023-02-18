from rest_framework import routers
from .api import photoViewSet


router = routers.DefaultRouter()


router.register("api/photos", photoViewSet, "photos")

urlpatterns = router.urls