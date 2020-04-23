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
    @IBOutlet weak var stackView: UIStackView!
    

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
    override func prepareForReuse() {
        normalPriceLabel.isHidden = false
        for subView in stackView.arrangedSubviews {
            subView.removeFromSuperview()
        }
    }
    
    func configure(data: [Dish], row: Int) {
        let dish = data[row]
        
        guard let imageURL = URL(string: dish.image) else { return }
        DispatchQueue.global().async {
            if let data = try? Data(contentsOf: imageURL) {
                DispatchQueue.main.async {
                    self.menuImageView.image = UIImage(data: data)
                    self.menuImageView.layer.cornerRadius = self.menuImageView.frame.height / 2
                }
            }
        }
        
        titleLabel.text = dish.title
        descriptionLabel.text = dish.description
        if let normalPrice = dish.normalPrice {
            normalPriceLabel.text = normalPrice
        } else {
            normalPriceLabel.isHidden = true
        }
        salePriceLabel.text = dish.salePrice
        
        guard let events = dish.events else { return }
        for event in events {
            stackView.addArrangedSubview(BadgeLabel(title: event))
        }
    }
}
