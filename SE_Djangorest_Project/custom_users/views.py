from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from .models import Seller, Customer
from .serializers import CustomerSerializer, SellerSerializer
from rest_framework.permissions import AllowAny

class SellerListView(ListAPIView):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer

class SellerDetailView(RetrieveAPIView):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer

class SellerCreateView(ListCreateAPIView):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    permission_classes = (AllowAny,)

class CustomerListView(ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDetailView(RetrieveAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerCreateView(ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = (AllowAny,)
