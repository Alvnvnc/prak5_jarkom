#!/bin/bash

# Memastikan script dijalankan dengan akses root
if [[ $EUID -ne 0 ]]; then
    echo "Script ini harus dijalankan dengan sudo atau root."
    exit 1
fi

# Mendapatkan username asli jika menggunakan sudo
REAL_USER=${SUDO_USER:-$USER}
REAL_HOME=$(getent passwd "$REAL_USER" | cut -d: -f6)

# Langkah 1: Menambahkan nameserver ke /etc/resolv.conf
echo "Menambahkan nameserver 192.168.122.1 ke /etc/resolv.conf..."
echo "nameserver 192.168.122.1" | tee /etc/resolv.conf > /dev/null

# Langkah 2: Instalasi JDK
echo "Memulai instalasi JDK..."
apt update
apt install -y openjdk-11-jdk

# Verifikasi instalasi JDK
echo "Memverifikasi instalasi JDK..."
java -version

# Langkah 3: Menghapus JMeter versi lama
echo "Menghapus JMeter versi lama (jika ada)..."
apt remove --purge jmeter

# Langkah 4: Mengunduh Apache JMeter
echo "Mengunduh Apache JMeter versi terbaru..."
wget https://archive.apache.org/dist/jmeter/binaries/apache-jmeter-5.5.tgz -P /tmp

# Langkah 5: Ekstraksi dan setup
echo "Ekstrak file JMeter..."
tar -xvzf /tmp/apache-jmeter-5.5.tgz -C /opt
mv /opt/apache-jmeter-5.5 /opt/jmeter

# Langkah 6: Menambahkan JMeter ke PATH sistem
echo "Menambahkan JMeter ke PATH sistem..."
cat > /etc/profile.d/jmeter.sh << 'EOF'
export PATH=$PATH:/opt/jmeter/bin
export JMETER_HOME=/opt/jmeter
EOF

# Set permissions
chmod 755 /etc/profile.d/jmeter.sh

# Langkah 7: Membuat symbolic link
echo "Membuat symbolic link untuk akses global..."
ln -sf /opt/jmeter/bin/jmeter /usr/local/bin/jmeter

# Langkah 8: Set kepemilikan direktori
echo "Mengatur kepemilikan direktori..."
chown -R $REAL_USER:$REAL_USER /opt/jmeter

# Langkah 9: Cleanup
echo "Membersihkan file temporary..."
rm -f /tmp/apache-jmeter-5.5.tgz

# Verifikasi instalasi
echo "Memverifikasi instalasi JMeter..."
source /etc/profile.d/jmeter.sh
jmeter -v

echo "Instalasi selesai. JMeter dan JDK telah berhasil diinstal."
echo "Silakan logout dan login kembali atau jalankan 'source /etc/profile.d/jmeter.sh' untuk mengaktifkan PATH"
