//
//  NetworkUseCase.swift
//  SideDish
//
//  Created by jinie on 2020/04/22.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct NetworkUseCase {
    static func requestMain(with manager: NetworkManable, completion: @escaping ([Dish]) -> ()) {
        manager.getResource(from: NetworkManager.EndPoint.main) { (data, error) in
            guard let data = data else { return }
            guard let decodedData = try? JSONDecoder().decode(DishInformation.self, from: data) else { return }
            completion(decodedData.body)
        }
    }
    
    static func requestSoup(with manager: NetworkManable, completion: @escaping ([Dish]) -> ()) {
        manager.getResource(from: NetworkManager.EndPoint.soup) { (data, error) in
            guard let data = data else { return }
            guard let decodedData = try? JSONDecoder().decode(DishInformation.self, from: data) else { return }
            completion(decodedData.body)
        }
    }
    
    static func requestSide(with manager: NetworkManable, completion: @escaping ([Dish]) -> ()) {
        manager.getResource(from: NetworkManager.EndPoint.side) { (data, error) in
            guard let data = data else { return }
            guard let decodedData = try? JSONDecoder().decode(DishInformation.self, from: data) else { return }
            completion(decodedData.body)
        }
    }
}
