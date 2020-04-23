//
//  BadgeLabel.swift
//  SideDish
//
//  Created by jinie on 2020/04/23.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class BadgeLabel: UILabel {
    init(title: String) {
        super.init(frame: .zero)
        text = title
        textColor = .white
        font = .systemFont(ofSize: 13)
        backgroundColor = .systemPurple
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
