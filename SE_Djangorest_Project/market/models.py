from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    production_date = models.DateTimeField()
    description = models.TextField(blank=True)
    image = models.ImageField(blank=True, null=True, upload_to="covers/%Y/%m/%D/")
    seller = models.ForeignKey('custom_users.Seller', on_delete=models.CASCADE)
