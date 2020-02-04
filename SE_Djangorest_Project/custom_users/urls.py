from django.urls import path
from .views import *

urlpatterns = [
    # path('create_user', UserListView.as_view())
    path('sellers', SellerListView.as_view()),
    path('seller/<pk>', SellerDetailView.as_view()),
    path('create_seller', SellerCreateView.as_view()),
    path('customers', CustomerListView.as_view()),
    path('customer/<pk>', CustomerDetailView.as_view()),
    path('create_customer', CustomerCreateView.as_view()),
    path("auth/register", RegistrationAPI.as_view()),
    path("auth/login", LoginAPI.as_view()),
    path("auth/user", UserAPI.as_view()),
]