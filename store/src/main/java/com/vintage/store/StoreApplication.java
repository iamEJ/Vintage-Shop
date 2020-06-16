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
		Product p1 = new Product("Vintage Phone","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada mi quis ligula malesuada, aliquet rhoncus quam laoreet. Praesent ornare metus quis tempus blandit. Mauris id sem libero. Donec fringilla blandit lectus et semper.", 240.99, "https://5.imimg.com/data5/CB/JI/RN/SELLER-2473871/vintage-phone-500x500.jpg",false);
		Product p2 = new Product("Vintage Gramophone","Quisque vitae lacinia felis, ac aliquam eros. Nullam et velit ultrices, laoreet purus vel, rhoncus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", 170.99, "https://m.media-amazon.com/images/I/81duTb0iirL._SR500,500_.jpg",true);
		Product p3 = new Product("Vintage Camera","Integer fringilla nisl at fringilla laoreet. Curabitur gravida magna volutpat mollis imperdiet. Suspendisse porta pharetra nibh in hendrerit.", 600.59, "https://lh3.googleusercontent.com/proxy/ym69ME3iuPepFOZoXKyxDy-0IlELJ9VPkXF6mts8KzouriqbGWubXrdok544KxTHeoJoDDVJhg1_23NlhjcbjnB2GEUTQ8ZbKJ-Pd-DLkYm3BZEB3Qk6RwxRVyxM6fxRM-gt9QQ5yxVZHvAcEXbCPj0GZJ-Q__UwVQ6PE7kd1_a3N535-Ty5flg2TsalLp5jH4PwSTyfa7wrY6PsO_Q",false);
		Product p4 = new Product("Vintage Computer","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 1400.99, "https://re.trotoys.com/articlepics/pc/2-microbee.jpg",false);
		Product p5 = new Product("Vintage Binoculars","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 400.89, "https://i.pinimg.com/736x/b8/50/cb/b850cba11050e2ee0e5eb62a4bc440ef--vintage-binoculars-opera.jpg",true);
		Product p6 = new Product("Vintage Pocket Watch","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 500.19, "https://i.ebayimg.com/images/g/N1UAAOSwsfpZ4RS~/s-l640.jpg",true);
		Product p7 = new Product("Vintage Compass","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 100.00, "https://m.media-amazon.com/images/I/81xHUUqLIxL._SR500,500_.jpg",false);
		Product p8 = new Product("Vintage Music Box","Aliquam finibus enim vel blandit sodales. In in odio ligula. Ut placerat neque nec varius ultricies. Suspendisse quis consectetur ex. Suspendisse faucibus, turpis id feugiat molestie, odio eros congue odio, eu iaculis purus sapien et arcu. ", 600.99, "https://i.pinimg.com/originals/0a/f2/c5/0af2c51c89bdd737b2a56ac7ac2c631e.jpg",false);
		
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
