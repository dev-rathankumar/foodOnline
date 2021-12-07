from django.urls import path
from . import views


urlpatterns = [
    path('registerUser/', views.registerUser, name='registerUser')
]