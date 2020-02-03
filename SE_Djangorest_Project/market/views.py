from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from .models import Product
from .serializers import ProductSerializer
from rest_framework.permissions import AllowAny

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCreateView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)
