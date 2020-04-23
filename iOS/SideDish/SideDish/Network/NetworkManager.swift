//
//  NetworkManager.swift
//  SideDish
//
//  Created by jinie on 2020/04/22.
//  Copyright © 2020 jinie. All rights reserved.
//

import Foundation

protocol NetworkManable {
    func getResource(from: String, handler: @escaping (Data?, Error?) -> ())
}

class NetworkManager: NetworkManable {
    enum EndPoint {
        static let main = "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/main"
        static let soup = "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/soup"
        static let side = "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/side"
    }
    
    func getResource(from: String, handler: @escaping (Data?, Error?) -> ()) {
        guard let url = URL(string: from) else { return }
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            handler(data, error)
        }.resume()
    }
}
