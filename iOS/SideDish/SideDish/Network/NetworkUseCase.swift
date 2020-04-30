//
//  NetworkUseCase.swift
//  SideDish
//
//  Created by jinie on 2020/04/22.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation
import UIKit

struct NetworkUseCase {
    static func saveImages(of dishes: [Dish]) {
        dishes.forEach { (dish) in
            guard let url = URL(string: dish.image) else { return }
            let cachesURL = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask)[0]
            let imageName = url.lastPathComponent
            let imageURL = cachesURL.appendingPathComponent(imageName)

            if !FileManager.default.fileExists(atPath: imageURL.path) {
                DispatchQueue.global().async {
                    if let data = try? Data(contentsOf: url) {
                        let image = UIImage(data: data)
                        do {
                            try image?.jpegData(compressionQuality: 1.0)?.write(to: imageURL, options: .atomic)
                        } catch {
                            print(error)
                        }
                    }
                }
            }
        }
    }
    
    static func getMainDishes(with manager: NetworkManable, completion: @escaping ([Dish]) -> ()) {
        manager.getResource(from: NetworkManager.EndPoint.main) { (data, error) in
            guard let data = data else { return }
            guard let dishes = try? JSONDecoder().decode(DishInformation.self, from: data).body else { return }
            saveImages(of: dishes)
            completion(dishes)
        }
    }
    
    static func getSoupDishes(with manager: NetworkManable, completion: @escaping ([Dish]) -> ()) {
        manager.getResource(from: NetworkManager.EndPoint.soup) { (data, error) in
            guard let data = data else { return }
            guard let dishes = try? JSONDecoder().decode(DishInformation.self, from: data).body else { return }
            saveImages(of: dishes)
            completion(dishes)
        }
    }
    
    static func getSideDishes(with manager: NetworkManable, completion: @escaping ([Dish]) -> ()) {
        manager.getResource(from: NetworkManager.EndPoint.side) { (data, error) in
            guard let data = data else { return }
            guard let dishes = try? JSONDecoder().decode(DishInformation.self, from: data).body else { return }
            saveImages(of: dishes)
            completion(dishes)
        }
    }
}
