# Generated by Django 3.0.3 on 2020-02-03 20:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='unitprice',
            new_name='price',
        ),
    ]
