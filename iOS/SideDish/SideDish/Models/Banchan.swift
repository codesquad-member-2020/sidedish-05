//
//  Banchan.swift
//  SideDish
//
//  Created by jinie on 2020/04/21.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct BanchanInformation: Codable {
    
    let statusCode: Int
    let body: [Banchan]
    
}

struct Banchan: Codable {
    
    let detail_hash: String
    let image: String
    let alt: String
    let delivery_type: [String]
    let title: String
    let description: String
    let n_price: String?
    let s_price: String
    let badge: [String]
    
}
