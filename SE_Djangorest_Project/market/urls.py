from django.urls import path
from .views import ProductDetailView, ProductListView, ProductCreateView

urlpatterns = [
    path('', ProductListView.as_view()),
    path('<pk>', ProductDetailView.as_view()),
    path('create/', ProductCreateView.as_view()),
]