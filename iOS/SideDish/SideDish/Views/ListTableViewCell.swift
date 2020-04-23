//
//  ListTableViewCell.swift
//  SideDish
//
//  Created by jinie on 2020/04/21.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ListTableViewCell: UITableViewCell {
    @IBOutlet weak var menuImageView: UIImageView!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var descriptionLabel: UILabel!
    @IBOutlet weak var normalPriceLabel: UILabel!
    @IBOutlet weak var salePriceLabel: UILabel!
    @IBOutlet weak var eventBadgeButton: UIButton!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
    func configure(data: [Dish], row: Int) {
        titleLabel.text = data[row].title
        descriptionLabel.text = data[row].description
    }
}
