# Generated by Django 3.0.3 on 2020-02-04 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0002_auto_20200203_2331'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]