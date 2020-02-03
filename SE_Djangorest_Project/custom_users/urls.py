from django.urls import path
from .views import SellerCreateView, SellerDetailView, SellerListView, CustomerCreateView, CustomerDetailView, CustomerListView

urlpatterns = [
    # path('create_user', UserListView.as_view())
    path('sellers', SellerListView.as_view()),
    path('seller/<pk>', SellerDetailView.as_view()),
    path('create_seller', SellerCreateView.as_view()),
    path('customers', CustomerListView.as_view()),
    path('customer/<pk>', CustomerDetailView.as_view()),
    path('create_customer', CustomerCreateView.as_view()),
]