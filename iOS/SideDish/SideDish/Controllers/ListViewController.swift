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
            NotificationCenter.default.post(name: dishesRenewalNotification,
                                            object: nil,
                                            userInfo: [dishesRenewalInfoKey: 0])
        }
    }
    private var soup: [Dish]? {
        didSet {
            NotificationCenter.default.post(name: dishesRenewalNotification,
                                            object: nil,
                                            userInfo: [dishesRenewalInfoKey: 1])
        }
    }
    private var side: [Dish]? {
        didSet {
            NotificationCenter.default.post(name: dishesRenewalNotification,
                                            object: nil,
                                            userInfo: [dishesRenewalInfoKey: 2])
        }
    }
    
    private let dishesRenewalNotification = Notification.Name("dishRenewalNotification")
    private let dishesRenewalInfoKey = "section"
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureNavigationBar()
        configureTableView()
        registerNotification()
        getAllDishes()
    }
    
    func configureNavigationBar() {
        self.navigationController?.isNavigationBarHidden = true
    }
    
    func configureTableView() {
        tableView.dataSource = self
        tableView.delegate = self
    }
    
    func registerNotification() {
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(reloadSection(_:)),
                                               name: dishesRenewalNotification,
                                               object: nil)
    }
    
    @objc func reloadSection(_ notification: Notification) {
//        guard let userInfo = notification.userInfo else { return }
//        let section = userInfo[dishesRenewalInfoKey] as! Int
        DispatchQueue.main.async {
//            self.tableView.reloadSbections(IndexSet(integer: section), with: .automatic)
            self.tableView.reloadData()
        }
    }
    
    func getAllDishes() {
        NetworkUseCase.getMainDishes(with: NetworkManager()) { (dishes) in
            self.main = dishes
        }
        
        NetworkUseCase.getSoupDishes(with: NetworkManager()) { (dishes) in
            self.soup = dishes
        }

        NetworkUseCase.getSideDishes(with: NetworkManager()) { (dishes) in
            self.side = dishes
        }
    }
}

extension ListViewController: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        switch section {
        case 0: return main?.count ?? 0
        case 1: return soup?.count ?? 0
        case 2: return side?.count ?? 0
        default: return 0
        }
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 120
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ListTableViewCell", for: indexPath) as! ListTableViewCell
        if indexPath.section == 0, let main = main { cell.configure(with: main[indexPath.row]) }
        if indexPath.section == 1, let soup = soup { cell.configure(with: soup[indexPath.row]) }
        if indexPath.section == 2, let side = side { cell.configure(with: side[indexPath.row]) }
        return cell
    }
}

extension ListViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 80
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let headerView = tableView.dequeueReusableCell(withIdentifier: "MainTableViewHeader") as! ListTableViewHeader
        headerView.configure(section: section)
        return headerView.contentView
    }
}
