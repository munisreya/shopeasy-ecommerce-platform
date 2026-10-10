package com.example.ecommerce.dto;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class PlaceOrderRequest {
    private String shippingName;
    private String shippingPhone;
    private String shippingAddress;
    private String paymentMethod;
}