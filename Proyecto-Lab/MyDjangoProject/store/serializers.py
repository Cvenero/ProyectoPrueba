from rest_framework import serializers
from .models.Product import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        #fields = ('name','description','price')
        fields = '__all__'