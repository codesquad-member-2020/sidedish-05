//
//  ListTableViewHeader.swift
//  SideDish
//
//  Created by jinie on 2020/04/21.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ListTableViewHeader: UITableViewCell {
    @IBOutlet weak var badgeButton: UIButton!
    @IBOutlet weak var titleLabel: UILabel!
    
    private let badges = ["메인반찬", "국·찌개", "밑반찬"]
    private let titles = ["한그릇 뚝딱 메인 요리", "김이 모락모락 국·찌개", "언제 먹어도 든든한 밑반찬"]
    
    func configure(section: Int) {
        badgeButton.setTitle(badges[section], for: .normal)
        badgeButton.layer.borderWidth = 1
        badgeButton.layer.borderColor = UIColor.lightGray.cgColor
        titleLabel.text = titles[section]
    }
}
