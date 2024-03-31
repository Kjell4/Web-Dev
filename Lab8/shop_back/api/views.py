from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Category, Product

# Create your views here.

# def get_categories(request):
#     data = Category.objects.all()

    # return HttpResponse(data)


def get_categories(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe = False)

def get_category_by_id(request, pk):
    category = Category.objects.get(id=pk)
    return JsonResponse(category.to_json())

def get_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe = False)

def get_product_by_id(request, pk):
    product = Product.objects.get(id=pk)
    return JsonResponse(product.to_json())

def get_products_by_category(request, pk):
    category = Category.objects.get(pk=pk).get_category()
    products = Product.objects.filter(category=category)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe = False)