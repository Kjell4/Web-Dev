from django.contrib import admin

from api.models import Category, Product

# Register your models here.

#Option-1
# admin.site.register(Category)
# admin.site.register(Product)

#Option-2
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'description', 'count')
    search_fields = ('name',)