from django import forms
from .models import Order


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['first_name', 'last_name', 'phone', 'email', 'address', 'country', 'state', 'city', 'pin_code']