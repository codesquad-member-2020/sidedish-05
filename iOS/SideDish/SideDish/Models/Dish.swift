//
//  Dish.swift
//  SideDish
//
//  Created by jinie on 2020/04/21.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct DishInformation: Codable {
    let statusCode: Int
    let body: [Dish]
}

struct Dish: Codable {
    let identifier: String
    let image: String
    let alt: String
    let deliveryType: [String]
    let title: String
    let description: String
    let normalPrice: String?
    let salePrice: String
    let events: [String]?
    
    enum CodingKeys: String, CodingKey {
        case identifier = "detail_hash"
        case image
        case alt
        case deliveryType = "delivery_type"
        case title
        case description
        case normalPrice = "n_price"
        case salePrice = "s_price"
        case events = "badge"
    }
}
