# Wireless Security Analysis & WPA Authentication Lab

## Overview
This lab focused on understanding wireless security concepts, WPA/WPA2 authentication workflows, and password security awareness using Kali Linux and the Aircrack-ng suite within a controlled educational environment.

The exercise provided practical exposure to wireless reconnaissance, monitor mode operations, handshake capture procedures, and password analysis techniques commonly discussed in cybersecurity training environments.

---

## Lab Environment

- Operating System: Kali Linux
- Tools Used:
  - Aircrack-ng Suite
  - Airmon-ng
  - Airodump-ng
  - Aireplay-ng
  - Aircrack-ng
- Wordlist:
  - rockyou.txt
- Environment Type:
  - Controlled Lab / Educational Practice Environment

---

# Activities Performed

## 1. Wireless Interface Identification

The wireless network interface was identified using Linux networking utilities. Monitor mode capabilities were verified before beginning wireless traffic analysis.

### Commands Used
```bash
iwconfig
sudo airmon-ng start wlan0
```

<img width="1920" height="1011" alt="Screenshot_2026-05-25_09_34_10" src="https://github.com/user-attachments/assets/09d1c181-7ff2-491e-9ce9-4d5006b65e4f" />


## 2. Wireless Traffic Monitoring

Wireless traffic monitoring was initiated to identify nearby access points, associated clients, channels, and WPA-secured networks available within the testing environment.

### Commands Used
```bash
sudo airodump-ng wlan0mon
```


## 3. WPA Handshake Capture

A targeted wireless capture process was initiated to observe authentication traffic and capture a WPA handshake for security analysis purposes.

The captured handshake demonstrated how authentication exchanges occur between wireless clients and access points.

### Commands Used
```bash
sudo airodump-ng --bssid [TARGET_BSSID] -c [CHANNEL] -w F01 wlan0mon
```

<img width="1920" height="1011" alt="Screenshot_2026-05-25_08_42_09" src="https://github.com/user-attachments/assets/035bba70-3e7a-45fa-bb1d-92fe418225b9" />


## 4. Authentication Traffic Observation

Authentication and association traffic generated during the testing phase was monitored to observe client-access point interactions during wireless authentication attempts.


### Commands Used
```bash
sudo aireplay-ng --deauth 0 -a [TARGET_BSSID] wlan0mon
```

<img width="1920" height="1011" alt="Screenshot_2026-05-25_08_42_19" src="https://github.com/user-attachments/assets/520a0224-060a-473a-8ac6-4d974a241d72" />


## 5. Password Analysis Using Wordlist

The captured handshake file was analyzed using a dictionary-based password testing approach with the rockyou.txt wordlist to demonstrate password security weaknesses associated with weak wireless credentials.

### Commands Used
```bash
locate rockyou.txt
ls
sudo aircrack-ng -w /path/to/rockyou.txt F01.cap!
```


<img width="1920" height="1011" alt="Screenshot_2026-05-25_09_05_26" src="https://github.com/user-attachments/assets/558f7678-bef7-40ff-a8e7-395cad1e30f4" />

<img width="1920" height="1011" alt="Screenshot_2026-05-25_08_42_29" src="https://github.com/user-attachments/assets/a6eaf7b2-15a4-4c70-98f9-856acc73ce33" />




## Key Learning Outcomes

Through this lab, the following concepts were explored:

* Wireless reconnaissance techniques
* Monitor mode operations
* WPA/WPA2 authentication concepts
* Handshake capture workflows
* Password security awareness
* Linux command-line operations
* Wireless traffic monitoring
* Security analysis methodologies

## Documentation & Reporting

This project was documented as part of an ongoing cybersecurity learning portfolio focused on practical labs, technical analysis, and security research documentation.

---

## Disclaimer

This project was conducted strictly within a controlled educational environment for learning and authorized security research purposes only.

No unauthorized access or malicious activity was performed.
