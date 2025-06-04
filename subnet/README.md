# 🌐 Subnet LEGO Visualizer

**Subnet LEGO Visualizer** is a web-based, interactive tool designed to help network administrators, cybersecurity professionals, and students understand IP addressing and subnetting concepts. This tool offers real-time, visual representation of subnet components using LEGO-like block visualization, making complex networking concepts accessible and easy to grasp.

---

## 🔍 Key Features

- **IP Address Analysis:** Parse and validate IPv4 addresses, ensuring they are in the correct format.
- **Subnet Mask Visualization:** Convert subnet masks between decimal and binary representations for better understanding.
- **Network Address Calculation:** Automatically calculates the network address based on the provided IP address and subnet mask.
- **Host Range Identification:** Quickly identify the first and last usable host addresses in a subnet.
- **Binary Visualization:** Color-coded bit representation displaying the network and host portions of the address.
- **CIDR Notation Support:** Display subnet information in **Classless Inter-Domain Routing (CIDR)** format for flexibility.
- **Usable Hosts Calculation:** Automatically calculates the number of available hosts in the subnet, helping with network planning.

---

## 💻 Technical Implementation

- **Tech Stack:** Built using **HTML**, **CSS**, and **JavaScript**. No external libraries or dependencies are required, keeping the tool lightweight and fast.
- **Responsive Design:** The tool features a clean, intuitive interface that works seamlessly across devices, making it suitable for both mobile and desktop users.
- **Visual Learning Approach:** Uses color-coded binary visualization to help users easily differentiate between the network and host portions of the IP address.
- **Real-Time Calculations:** Provides instant feedback as users modify their inputs, offering a hands-on learning experience.

---

## 🚀 How to Use

1. **Enter the Host IP Address:** The default value is `192.168.1.100`, but you can modify it based on your network setup.
2. **Enter the Subnet Mask:** The default value is `255.255.255.0`. Enter the subnet mask corresponding to the IP address.
3. **Click “Visualize Subnet”:** Press the button to generate a detailed analysis and a visual representation of the subnet.
4. **Review Results:** View the network information and binary visualization results.

---

## 📊 Output Information

The tool provides the following output:

- **Complete IP Address Analysis:** Includes validation and breakdown of the provided IP address.
- **Subnet Mask Representation:** Shows both decimal and **CIDR** (Classless Inter-Domain Routing) notation.
- **Network Address:** Automatically calculated from the IP address and subnet mask.
- **Host Range:** Displays the first and last usable host addresses in the subnet.
- **Broadcast Address:** The broadcast address for the network.
- **Number of Usable Hosts:** The number of available hosts within the given subnet.
- **Binary Visualization:** A color-coded, bit-by-bit visualization of both the IP address and subnet mask, showing the network and host bits.

---

## 🔧 Technical Details

The calculator performs the following operations:

- **Decimal to Binary Conversion:** Converts decimal values of IP and subnet mask into binary format for easier analysis.
- **Bitwise Operations:** Performs logical bitwise operations to calculate the network address, broadcast address, and number of usable hosts.
- **Color-Coding:** Network bits are color-coded **blue**, while host bits are color-coded **red**, making it easy to identify the different sections of the address.
- **32-Bit Structure Representation:** Visualizes the 32-bit structure of IPv4 addresses with octet separators to enhance understanding.

---

## 🎓 Educational Value

This tool is not only a practical utility but also serves as an educational resource:

- **Helps Students Understand IP Addressing:** Shows the relationship between an IP address and a subnet mask.
- **Visualizes Binary Representation:** Offers an intuitive view of how IP addresses and subnet masks are structured in binary form.
- **Interactive Learning:** Through real-time calculations and visual representation, users can interactively learn subnetting concepts.
- **Improves Networking Knowledge:** Ideal for students and professionals looking to deepen their understanding of subnetting and IP addressing.

---

## 💾 Installation

1. **Download the HTML file:** Simply download the provided HTML file.
2. **Open in a Browser:** Open the file in any modern web browser (Chrome, Firefox, Safari, Edge).
3. **No Server Required:** The tool is completely client-side and requires no installation, making it easy to use on any device.

> **Note:** The tool works entirely offline, with no server-side setup needed.

---

## 🔜 Future Enhancements

Potential future features may include:

- **Subnet Splitting/Planning Tools:** Add functionality for subnet division and network planning.
- **IPv6 Support:** Expand the tool to support IPv6 addresses alongside IPv4.
- **Custom Network Visualization:** Allow users to create their own custom visualizations for unique network configurations.
- **Exportable Results:** Enable users to export their subnet analysis results in various formats (e.g., PDF, CSV).
- **Subnet Practice Exercises:** Provide interactive exercises to help users practice subnetting skills.

---

## 📝 License

© 2025 **Yoonsung Ed Cho**. All Rights Reserved.

Created as part of a **cybersecurity portfolio project** focused on networking fundamentals and subnet analysis. This tool helps users better understand the complex concepts of IP addressing and subnetting.

---

