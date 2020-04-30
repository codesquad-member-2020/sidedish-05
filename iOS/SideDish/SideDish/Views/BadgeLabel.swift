//
//  BadgeLabel.swift
//  SideDish
//
//  Created by jinie on 2020/04/23.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class BadgeLabel: UILabel {
    let colors: [String : UIColor] = ["이벤트특가": .systemPurple, "론칭특가": .systemOrange, "품절": .black]
    let insets = UIEdgeInsets(top: 1, left: 2, bottom: 1, right: 2)
    
    init(title: String) {
        super.init(frame: .zero)
        text = title
        textColor = .white
        font = .systemFont(ofSize: 13)
        backgroundColor = colors[title]
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func drawText(in rect: CGRect) {
        super.drawText(in: rect.inset(by: insets))
    }
    
    override var intrinsicContentSize: CGSize {
        let size = super.intrinsicContentSize
        return CGSize(width: size.width + insets.left + insets.right,
                      height: size.height + insets.top + insets.bottom)
    }
}
