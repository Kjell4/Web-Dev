from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255, default=None)
    price = models.FloatField(default=None)
    description = models.TextField(default=None)
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    category = models.CharField(max_length=255, default=None)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Price: {self.price}, Description: {self.description}, Count: {self.count}, isActive: {self.is_active}, category: {self.category}"
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'isActive': self.is_active,
            'category': self.category
        }


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    def get_category(self):
        return self.name
