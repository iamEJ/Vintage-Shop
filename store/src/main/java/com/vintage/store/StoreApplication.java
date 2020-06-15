package com.vintage.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.vintage.store.model.Product;
import com.vintage.store.service.ProductService;

@SpringBootApplication
public class StoreApplication implements CommandLineRunner
{
	
	@Autowired
	private ProductService productService;

	public static void main(String[] args) {
		SpringApplication.run(StoreApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Product p1 = new Product("Vintage computer","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada mi quis ligula malesuada, aliquet rhoncus quam laoreet. Praesent ornare metus quis tempus blandit. Mauris id sem libero. Donec fringilla blandit lectus et semper.", 500.99, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjL0aLxcDDICCYDxdQarXlQDHixZezLgMhxlXnb0i9BKa-ct3G&usqp=CAU",false);
		Product p2 = new Product("Vintage camera","Quisque vitae lacinia felis, ac aliquam eros. Nullam et velit ultrices, laoreet purus vel, rhoncus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", 1500.99, "https://i.etsystatic.com/17640578/r/il/806268/1502682054/il_570xN.1502682054_bjo6.jpg",true);
		Product p3 = new Product("Vintage computer","Integer fringilla nisl at fringilla laoreet. Curabitur gravida magna volutpat mollis imperdiet. Suspendisse porta pharetra nibh in hendrerit.", 100.59, "https://media.istockphoto.com/photos/old-classic-computer-picture-id183759387?k=6&m=183759387&s=612x612&w=0&h=fioyoLCjYlP-RsKXZZv2ZgEtybnC1Offw11QzKWIZnM=",false);
		Product p4 = new Product("Vintage computer","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 1400.99, "https://banner2.cleanpng.com/20180327/bpw/kisspng-vintage-computer-festival-computer-mouse-computer-5abb07294ad6c9.7584004915222065053066.jpg",false);
		Product p5 = new Product("Vintage camera","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 400.89, "https://www.vintagephotolab.com/wp-content/uploads/2017/06/35737_00_2x.jpg",true);
		Product p6 = new Product("Vintage printer","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 500.19, "https://images-na.ssl-images-amazon.com/images/I/71C07jAF27L._AC_SX425_.jpg",true);
		Product p7 = new Product("Vintage printer","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 100.00, "https://ae01.alicdn.com/kf/HTB1hvaYPVXXXXbwXFXXq6xXFXXXz/Vintage-Printer-Model-Music-Box-Plastic-Music-Boxes-Retro-Printer-Decoration-Miniature-Craft-Music-Box-For.jpg_640x640.jpg",false);
		Product p8 = new Product("Vintage Loptop","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 600.99, "https://images-na.ssl-images-amazon.com/images/I/51XGngC6jsL._AC_SL1000_.jpg",false);
		
		productService.createProduct(p1);
		productService.createProduct(p2);
		productService.createProduct(p3);
		productService.createProduct(p4);
		productService.createProduct(p5);
		productService.createProduct(p6);
		productService.createProduct(p7);
		productService.createProduct(p8);
		
		productService.createProduct(p1);
		productService.createProduct(p2);
		productService.createProduct(p3);
		productService.createProduct(p4);
		productService.createProduct(p5);
		productService.createProduct(p6);
		productService.createProduct(p7);
		productService.createProduct(p8);
	}

}
