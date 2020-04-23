//
//  ListViewController.swift
//  SideDish
//
//  Created by jinie on 2020/04/21.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class ListViewController: UIViewController {
    @IBOutlet weak var tableView: UITableView!
    
    private var main: [Dish]? {
        didSet {
            DispatchQueue.main.async {
                self.tableView.reloadSections(IndexSet(integer: 0), with: .automatic)
            }
        }
    }
    private var soup: [Dish]? {
        didSet {
            DispatchQueue.main.async {
                self.tableView.reloadSections(IndexSet(integer: 1), with: .automatic)
            }
        }
    }
    private var side: [Dish]? {
        didSet {
            DispatchQueue.main.async {
                self.tableView.reloadSections(IndexSet(integer: 2), with: .automatic)
            }
        }
    }
    
    let badges = ["메인반찬", "국·찌개", "밑반찬"]
    let titles = ["한그릇 뚝딱 메인 요리", "김이 모락모락 국·찌개", "언제 먹어도 든든한 밑반찬"]

    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureNavigationBar()
        configureTableView()
        requestListData()
    }
    
    func configureNavigationBar() {
        self.navigationController?.isNavigationBarHidden = true
    }
    
    func configureTableView() {
        tableView.dataSource = self
        tableView.delegate = self
    }
    
    func requestListData() {
        NetworkUseCase.requestMain(with: NetworkManager()) { (dishes) in
            self.main = dishes
        }
        
        NetworkUseCase.requestSoup(with: NetworkManager()) { (dishes) in
            self.soup = dishes
        }

        NetworkUseCase.requestSide(with: NetworkManager()) { (dishes) in
            self.side = dishes
        }
    }
}

extension ListViewController: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 8
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ListTableViewCell", for: indexPath) as! ListTableViewCell
        if indexPath.section == 0, let main = main { cell.configure(data: main, row: indexPath.row) }
        if indexPath.section == 1, let soup = soup { cell.configure(data: soup, row: indexPath.row) }
        if indexPath.section == 2, let side = side { cell.configure(data: side, row: indexPath.row) }
        return cell
    }
}

extension ListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 80
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let headerView = tableView.dequeueReusableCell(withIdentifier: "MainTableViewHeader") as! ListTableViewHeader
        headerView.badgeButton.setTitle(badges[section], for: .normal)
        headerView.badgeButton.layer.borderWidth = 1
        headerView.badgeButton.layer.borderColor = UIColor.lightGray.cgColor
        headerView.titleLabel.text = titles[section]
        return headerView.contentView
    }
}
