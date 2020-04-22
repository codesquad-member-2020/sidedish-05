//
//  BanchanDetails.swift
//  SideDish
//
//  Created by jinie on 2020/04/21.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

struct BanchanDetailsInformation: Codable {
    let hash: String
    let data: BanchanDetails
}

struct BanchanDetails: Codable {
    let top_image: String
    let thumb_images: [String]
    let product_description: String
    let point: String
    let delivery_info: String
    let delivery_fee: String
    let prices: [String]
    let detail_section: [String]
}
