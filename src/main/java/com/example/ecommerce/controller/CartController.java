package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public Cart getCart(Authentication auth) {
        return cartService.getOrCreateCart(auth.getName());
    }

    @PostMapping("/add")
    public Cart add(@RequestParam Long productId, @RequestParam int quantity, Authentication auth) {
        return cartService.addItem(auth.getName(), productId, quantity);
    }

    @DeleteMapping("/remove/{productId}")
    public Cart remove(@PathVariable Long productId, Authentication auth) {
        return cartService.removeItem(auth.getName(), productId);
    }
}