from django.urls import path, re_path

from api.views import get_categories, get_category_by_id, get_products, get_product_by_id, get_products_by_category

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category_by_id),
    path('products/', get_products),
    path('products/<int:pk>', get_product_by_id),
    path('categories/<int:pk>/products', get_products_by_category)
]