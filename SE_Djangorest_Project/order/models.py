from django.db import models

class Basket(models.Model):
    creation_date = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)

class BasketItem(models.Model):
    basket = models.ForeignKey(Basket, on_delete=models.CASCADE)
    product = models.ForeignKey('market.Product', on_delete=models.CASCADE)

class Order(models.Model):
    basket = models.OneToOneField(Basket, on_delete=models.CASCADE)
    customer = models.ForeignKey('custom_users.Customer', on_delete=models.CASCADE)
