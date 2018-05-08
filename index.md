CryptoStreams
-------------
[TODO add general info here]

<style>
.card {
    float: left;
    transition: 0.3s;
    border-radius: 15px;
    width: 25%;
    height: 25%;
    padding: 5px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.2);}

.card:hover {
    box-shadow: 0 0 25px rgba(0,0,255,1);
}

.container {
    padding: 2px 16px;
}

.empty {
    float: left;
    transition: 0.3s;
    border-radius: 15px;
    width: 25%;
    height: 200px;
    padding: 10px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0);
}

</style>

#### Block ciphers
<div class="card">
    <div class="container">
      <h5><b>AES</b></h5>
      3/10<br/>
        <svg width="100%" height="12">
              <rect width="30.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="30.0%" width="70.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/aes">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/AES">Test vectors</a><br/>
      <a href="#AES">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>BLOWFISH</b></h5>
      2/16<br/>
        <svg width="100%" height="12">
              <rect width="12.5%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="12.5%" width="87.5%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/blowfish">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/BLOWFISH">Test vectors</a><br/>
      <a href="#BLOWFISH">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MARS</b></h5>
      -/16<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/mars">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/MARS">Test vectors</a><br/>
      <a href="#MARS">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>RC6</b></h5>
      4/20<br/>
        <svg width="100%" height="12">
              <rect width="20.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="20.0%" width="80.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/rc6">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/RC6">Test vectors</a><br/>
      <a href="#RC6">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SERPENT</b></h5>
      3/32<br/>
        <svg width="100%" height="12">
              <rect width="9.375%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="9.375%" width="90.625%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/serpent">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/SERPENT">Test vectors</a><br/>
      <a href="#SERPENT">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>TWOFISH</b></h5>
      2/16<br/>
        <svg width="100%" height="12">
              <rect width="12.5%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="12.5%" width="87.5%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/twofish">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/TWOFISH">Test vectors</a><br/>
      <a href="#TWOFISH">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SIMON</b></h5>
      17/68<br/>
        <svg width="100%" height="12">
              <rect width="25.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="25.0%" width="75.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/simon">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/SIMON">Test vectors</a><br/>
      <a href="#SIMON">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SPECK</b></h5>
      10/32<br/>
        <svg width="100%" height="12">
              <rect width="31.25%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="31.25%" width="68.75%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/speck">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/SPECK">Test vectors</a><br/>
      <a href="#SPECK">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>GOST</b></h5>
      9/32<br/>
        <svg width="100%" height="12">
              <rect width="28.125%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="28.125%" width="71.875%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/gost">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/GOST">Test vectors</a><br/>
      <a href="#GOST">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SINGLE-DES</b></h5>
      5/16<br/>
        <svg width="100%" height="12">
              <rect width="31.25%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="31.25%" width="68.75%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/single-des">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/SINGLE-DES">Test vectors</a><br/>
      <a href="#SINGLE-DES">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>TRIPLE-DES</b></h5>
      3/16<br/>
        <svg width="100%" height="12">
              <rect width="18.75%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="18.75%" width="81.25%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/triple-des">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/TRIPLE-DES">Test vectors</a><br/>
      <a href="#TRIPLE-DES">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>TEA</b></h5>
      5/32<br/>
        <svg width="100%" height="12">
              <rect width="15.625%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="15.625%" width="84.375%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/tea">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/TEA">Test vectors</a><br/>
      <a href="#TEA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>KASUMI</b></h5>
      3/8<br/>
        <svg width="100%" height="12">
              <rect width="37.5%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="37.5%" width="62.5%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/kasumi">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/KASUMI">Test vectors</a><br/>
      <a href="#KASUMI">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>KUZNYECHIK</b></h5>
      2/10<br/>
        <svg width="100%" height="12">
              <rect width="20.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="20.0%" width="80.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/kuznyechik">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/KUZNYECHIK">Test vectors</a><br/>
      <a href="#KUZNYECHIK">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MISTY1</b></h5>
      2/4<br/>
        <svg width="100%" height="12">
              <rect width="50.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="50.0%" width="50.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/misty1">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/MISTY1">Test vectors</a><br/>
      <a href="#MISTY1">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>NOEKEON</b></h5>
      3/16<br/>
        <svg width="100%" height="12">
              <rect width="18.75%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="18.75%" width="81.25%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/noekeon">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/NOEKEON">Test vectors</a><br/>
      <a href="#NOEKEON">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SHACAL2</b></h5>
      10/80<br/>
        <svg width="100%" height="12">
              <rect width="12.5%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="12.5%" width="87.5%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/shacal2">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/SHACAL2">Test vectors</a><br/>
      <a href="#SHACAL2">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>XTEA</b></h5>
      5/32<br/>
        <svg width="100%" height="12">
              <rect width="15.625%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="15.625%" width="84.375%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/xtea">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/XTEA">Test vectors</a><br/>
      <a href="#XTEA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>ARIA</b></h5>
      3/12<br/>
        <svg width="100%" height="12">
              <rect width="25.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="25.0%" width="75.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/aria">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/ARIA">Test vectors</a><br/>
      <a href="#ARIA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>CAMELLIA</b></h5>
      3/18<br/>
        <svg width="100%" height="12">
              <rect width="16.666666666666664%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="16.666666666666664%" width="83.33333333333334%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/camellia">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/CAMELLIA">Test vectors</a><br/>
      <a href="#CAMELLIA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>CAST</b></h5>
      3/12<br/>
        <svg width="100%" height="12">
              <rect width="25.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="25.0%" width="75.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/cast">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/CAST">Test vectors</a><br/>
      <a href="#CAST">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>IDEA</b></h5>
      1/8<br/>
        <svg width="100%" height="12">
              <rect width="12.5%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="12.5%" width="87.5%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/idea">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/IDEA">Test vectors</a><br/>
      <a href="#IDEA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SEED</b></h5>
      2/16<br/>
        <svg width="100%" height="12">
              <rect width="12.5%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="12.5%" width="87.5%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/block/ciphers/seed">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/block/SEED">Test vectors</a><br/>
      <a href="#SEED">Detailed info</a><br/>
    </div>
</div>

<div class="empty"></div>

#### Stream ciphers
<div class="card">
    <div class="container">
      <h5><b>HC-128</b></h5>
      -/no<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/hc-128">Source code</a><br/>
      <a href="no_tv">Test vectors</a><br/>
      <a href="#HC-128">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Rabbit</b></h5>
      -/4<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/rabbit">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Rabbit">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Salsa20</b></h5>
      -/20<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/salsa20">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Salsa20">Test vectors</a><br/>
      <a href="#Salsa20">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SOSEMANUK</b></h5>
      -/25<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/sosemanuk">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#SOSEMANUK">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Grain</b></h5>
      -/13<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/grain">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Grain">Test vectors</a><br/>
      <a href="#Grain">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MICKEY</b></h5>
      -/8<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/mickey">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/MICKEY">Test vectors</a><br/>
      <a href="#MICKEY">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Trivium</b></h5>
      -/9<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/trivium">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Trivium">Test vectors</a><br/>
      <a href="#Trivium">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>F-FCSR</b></h5>
      -/5<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/f-fcsr">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#F-FCSR">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>RC4</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/other/rc4">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/RC4">Test vectors</a><br/>
      <a href="#RC4">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Chacha</b></h5>
      -/20<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/other/chacha">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Chacha">Test vectors</a><br/>
      <a href="#Chacha">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>ABC</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/abc">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#ABC">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Achterbahn</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/achterbahn">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Achterbahn">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>CryptMT</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/cryptmt">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#CryptMT">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>DECIM</b></h5>
      -/8<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/decim">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/DECIM">Test vectors</a><br/>
      <a href="#DECIM">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>DICING</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/dicing">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#DICING">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Dragon</b></h5>
      -/16<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/dragon">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Dragon">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Edon80</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/edon80">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Edon80">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>F-FCSR</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/f-fcsr">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#F-FCSR">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Frogbit</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/frogbit">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Frogbit">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Fubuki</b></h5>
      -/4<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/fubuki">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Fubuki">Test vectors</a><br/>
      <a href="#Fubuki">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Grain</b></h5>
      -/13<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/grain">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Grain">Test vectors</a><br/>
      <a href="#Grain">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Hermes</b></h5>
      -/10<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/hermes">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Hermes">Test vectors</a><br/>
      <a href="#Hermes">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>LEX</b></h5>
      -/10<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/lex">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/LEX">Test vectors</a><br/>
      <a href="#LEX">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MAG</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/mag">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#MAG">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MICKEY</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/mickey">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/MICKEY">Test vectors</a><br/>
      <a href="#MICKEY">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Mir-1</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/mir-1">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Mir-1">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Moustique</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/moustique">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Moustique">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>NLS</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/nls">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#NLS">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Phelix</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/phelix">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Phelix">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Polar Bear</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/polar bear">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Polar Bear">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Pomaranch</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/pomaranch">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Pomaranch">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Py</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/py">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Py">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Rabbit</b></h5>
      -/4<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/rabbit">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Rabbit">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Salsa20</b></h5>
      -/20<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/salsa20">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/Salsa20">Test vectors</a><br/>
      <a href="#Salsa20">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SFINKS</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/sfinks">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#SFINKS">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SOSEMANUK</b></h5>
      -/25<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/sosemanuk">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#SOSEMANUK">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SSS</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/sss">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#SSS">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>TRBDK3 YAEA</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/trbdk3 yaea">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#TRBDK3 YAEA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>TSC-4</b></h5>
      -/32<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/tsc-4">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/stream_cipher/TSC-4">Test vectors</a><br/>
      <a href="#TSC-4">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>VEST</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/vest">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#VEST">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>WG</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/wg">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#WG">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Zk-Crypt</b></h5>
      -/-<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/stream_ciphers/estream/zk-crypt">Source code</a><br/>
      <a href="#no_tv.md">Test vectors</a><br/>
      <a href="#Zk-Crypt">Detailed info</a><br/>
    </div>
</div>

<div class="empty"></div>
<div class="empty"></div>

#### Hash functions
<div class="card">
    <div class="container">
      <h5><b>Blake</b></h5>
      1/14<br/>
        <svg width="100%" height="12">
              <rect width="7.142857142857143%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="7.142857142857143%" width="92.85714285714286%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Blake">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Blake">Test vectors</a><br/>
      <a href="#Blake">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Grostl</b></h5>
      2/10<br/>
        <svg width="100%" height="12">
              <rect width="20.0%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="20.0%" width="80.0%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Grostl">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Grostl">Test vectors</a><br/>
      <a href="#Grostl">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>JH</b></h5>
      6/42<br/>
        <svg width="100%" height="12">
              <rect width="14.285714285714285%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="14.285714285714285%" width="85.71428571428572%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/JH">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/JH">Test vectors</a><br/>
      <a href="#JH">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Keccak</b></h5>
      3/24<br/>
        <svg width="100%" height="12">
              <rect width="12.5%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="12.5%" width="87.5%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Keccak">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Keccak">Test vectors</a><br/>
      <a href="#Keccak">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Skein</b></h5>
      4/72<br/>
        <svg width="100%" height="12">
              <rect width="5.555555555555555%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="5.555555555555555%" width="94.44444444444444%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Skein">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Skein">Test vectors</a><br/>
      <a href="#Skein">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Abacus</b></h5>
      -/280<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Abacus">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Abacus">Test vectors</a><br/>
      <a href="#Abacus">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>ARIRANG</b></h5>
      -/4<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/ARIRANG">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/ARIRANG">Test vectors</a><br/>
      <a href="#ARIRANG">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Aurora</b></h5>
      -/17<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Aurora">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Aurora">Test vectors</a><br/>
      <a href="#Aurora">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Cheetah</b></h5>
      -/16<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Cheetah">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Cheetah">Test vectors</a><br/>
      <a href="#Cheetah">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>CubeHash</b></h5>
      -/8<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/CubeHash">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/CubeHash">Test vectors</a><br/>
      <a href="#CubeHash">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>DCH</b></h5>
      -/4<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/DCH">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/DCH">Test vectors</a><br/>
      <a href="#DCH">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>DynamicSHA</b></h5>
      -/16<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/DynamicSHA">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/DynamicSHA">Test vectors</a><br/>
      <a href="#DynamicSHA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>DynamicSHA2</b></h5>
      -/17<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/DynamicSHA2">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/DynamicSHA2">Test vectors</a><br/>
      <a href="#DynamicSHA2">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>ECHO</b></h5>
      -/8<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/ECHO">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/ECHO">Test vectors</a><br/>
      <a href="#ECHO">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Hamsi</b></h5>
      -/3<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Hamsi">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Hamsi">Test vectors</a><br/>
      <a href="#Hamsi">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Lesamnta</b></h5>
      -/32<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Lesamnta">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Lesamnta">Test vectors</a><br/>
      <a href="#Lesamnta">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Luffa</b></h5>
      -/8<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Luffa">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Luffa">Test vectors</a><br/>
      <a href="#Luffa">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MD6</b></h5>
      9/104<br/>
        <svg width="100%" height="12">
              <rect width="8.653846153846153%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="8.653846153846153%" width="91.34615384615384%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/MD6">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/MD6">Test vectors</a><br/>
      <a href="#MD6">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SIMD</b></h5>
      -/4<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/SIMD">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/SIMD">Test vectors</a><br/>
      <a href="#SIMD">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Tangle</b></h5>
      -/80<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Tangle">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Tangle">Test vectors</a><br/>
      <a href="#Tangle">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Twister</b></h5>
      -/9<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Twister">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Twister">Test vectors</a><br/>
      <a href="#Twister">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Blender</b></h5>
      -/32<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Blender">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Blender">Test vectors</a><br/>
      <a href="#Blender">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>BMW</b></h5>
      -/16<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/BMW">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/BMW">Test vectors</a><br/>
      <a href="#BMW">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Boole</b></h5>
      -/16<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Boole">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Boole">Test vectors</a><br/>
      <a href="#Boole">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>CHI</b></h5>
      -/20<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/CHI">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/CHI">Test vectors</a><br/>
      <a href="#CHI">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>CRUNCH</b></h5>
      -/244<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/CRUNCH">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/CRUNCH">Test vectors</a><br/>
      <a href="#CRUNCH">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>EDON</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/EDON">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/EDON">Test vectors</a><br/>
      <a href="#EDON">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>ESSENCE</b></h5>
      -/32<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/ESSENCE">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/ESSENCE">Test vectors</a><br/>
      <a href="#ESSENCE">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Fugue</b></h5>
      -/5<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Fugue">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Fugue">Test vectors</a><br/>
      <a href="#Fugue">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Khichidi</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Khichidi">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Khichidi">Test vectors</a><br/>
      <a href="#Khichidi">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Lane</b></h5>
      -/9<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Lane">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Lane">Test vectors</a><br/>
      <a href="#Lane">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MCSSHA3</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/MCSSHA3">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/MCSSHA3">Test vectors</a><br/>
      <a href="#MCSSHA3">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MeshHash</b></h5>
      -/32<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/MeshHash">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/MeshHash">Test vectors</a><br/>
      <a href="#MeshHash">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>NaSHA</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/NaSHA">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/NaSHA">Test vectors</a><br/>
      <a href="#NaSHA">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Sarmal</b></h5>
      -/16<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Sarmal">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Sarmal">Test vectors</a><br/>
      <a href="#Sarmal">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Shabal</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Shabal">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Shabal">Test vectors</a><br/>
      <a href="#Shabal">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Shamata</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Shamata">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Shamata">Test vectors</a><br/>
      <a href="#Shamata">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SHAvite3</b></h5>
      -/12<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/SHAvite3">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/SHAvite3">Test vectors</a><br/>
      <a href="#SHAvite3">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SpectralHash</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/SpectralHash">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/SpectralHash">Test vectors</a><br/>
      <a href="#SpectralHash">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>StreamHash</b></h5>
      -/n/a<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/StreamHash">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/StreamHash">Test vectors</a><br/>
      <a href="#StreamHash">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Vortex</b></h5>
      -/15<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Vortex">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Vortex">Test vectors</a><br/>
      <a href="#Vortex">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>WaMM</b></h5>
      -/2<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/WaMM">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/WaMM">Test vectors</a><br/>
      <a href="#WaMM">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Waterfall</b></h5>
      -/20<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Waterfall">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Waterfall">Test vectors</a><br/>
      <a href="#Waterfall">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Tangle2</b></h5>
      -/80<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/Tangle2">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Tangle2">Test vectors</a><br/>
      <a href="#Tangle2">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Gost</b></h5>
      1/32<br/>
        <svg width="100%" height="12">
              <rect width="3.125%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="3.125%" width="96.875%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/others/hash_functions/gost">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Gost">Test vectors</a><br/>
      <a href="#Gost">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>MD5</b></h5>
      13/64<br/>
        <svg width="100%" height="12">
              <rect width="20.3125%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="20.3125%" width="79.6875%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/others/hash_functions/md5">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/MD5">Test vectors</a><br/>
      <a href="#MD5">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>RIPMD160</b></h5>
      -/80<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/sha3/hash_functions/RIPMD160">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/RIPMD160">Test vectors</a><br/>
      <a href="#RIPMD160">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SHA1</b></h5>
      15/80<br/>
        <svg width="100%" height="12">
              <rect width="18.75%" height="12" style="fill:rgb(255,0,0)"/>
              <rect x="18.75%" width="81.25%" height="12" style="fill:rgb(0,255,0)" />
        </svg><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/others/hash_functions/sha1">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/SHA1">Test vectors</a><br/>
      <a href="#SHA1">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>SHA2</b></h5>
      -/64<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/others/hash_functions/sha2">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/SHA2">Test vectors</a><br/>
      <a href="#SHA2">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Tiger</b></h5>
      -/23<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/others/hash_functions/tiger">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Tiger">Test vectors</a><br/>
      <a href="#Tiger">Detailed info</a><br/>
    </div>
</div>

<div class="card">
    <div class="container">
      <h5><b>Whirlpool</b></h5>
      -/10<br/>
No test results.<br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/streams/hash/others/hash_functions/whirlpool">Source code</a><br/>
      <a href="https://github.com/crocs-muni/CryptoStreams/tree/master/testsuite/test_resources/hash/Whirlpool">Test vectors</a><br/>
      <a href="#Whirlpool">Detailed info</a><br/>
    </div>
</div>

<div class="empty"></div>


### Detailed info
#### Block ciphers
<a name="AES"/>
##### AES
- Block size: 16

- Key size: 16

- Rounds: 10

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 3         | 3        | 3       | -        |
|          100MB | 3         | 3        | 3       | 3        |
|           10MB | 3         | 3        | 3       | 3        |

<a name="BLOWFISH"/>
##### BLOWFISH
- Block size: 8

- Key size: 4-56

- Rounds: 16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 2       | -        |
|          100MB | 2         | 2        | 2       | 2        |
|           10MB | 3         | 1        | 2       | 2        |

<a name="MARS"/>
##### MARS
- Block size: 16

- Key size: 16, 24, 32

- Rounds: 0-16 (8 always used)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | 0        |
|           10MB | -         | -        | -       | 0        |

<a name="RC6"/>
##### RC6
- Block size: 16

- Key size: 16, 24, 32

- Rounds: 0-20

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 4         | 4        | 4       | -        |
|          100MB | 4         | 4        | 4       | 5        |
|           10MB | 4         | 4        | 4       | 4        |

<a name="SERPENT"/>
##### SERPENT
- Block size: 16

- Key size: 16, 24, 32

- Rounds: 0-32

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 3         | 3        | 3       | -        |
|          100MB | 3         | 3        | 3       | 3        |
|           10MB | 3         | 3        | 3       | 3        |

<a name="TWOFISH"/>
##### TWOFISH
- Block size: 16

- Key size: 16, 24, 32

- Rounds: 0-16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 2       | -        |
|          100MB | 2         | 2        | 2       | 2        |
|           10MB | 2         | 2        | 2       | 2        |

<a name="SIMON"/>
##### SIMON
- Block size: 4-16

- Key size: 8-32

- Rounds: 0-(32-72)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 16        | 16       | 17      | -        |
|          100MB | 15        | 16       | 16      | 18       |
|           10MB | 13        | 15       | 16      | 17       |

<a name="SPECK"/>
##### SPECK
- Block size: 4-16

- Key size: 8-32

- Rounds: 0-(22-34)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 8         | 7        | 10      | -        |
|          100MB | 8         | 7        | 8       | 9        |
|           10MB | 8         | 7        | 8       | 9        |

<a name="GOST"/>
##### GOST
- Block size: 8

- Key size: 32

- Rounds: 32

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 8         | 8        | 9       | -        |
|          100MB | 7         | 8        | 8       | 10       |
|           10MB | 7         | 7        | 8       | 10       |

<a name="SINGLE-DES"/>
##### SINGLE-DES
- Block size: 8

- Key size: 7

- Rounds: 16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 5         | 4        | 5       | -        |
|          100MB | 4         | 4        | 4       | 5        |
|           10MB | 4         | 4        | 5       | 4        |

<a name="TRIPLE-DES"/>
##### TRIPLE-DES
- Block size: 8

- Key size: 21

- Rounds: 16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 3         | 2        | 3       | -        |
|          100MB | 2         | 2        | 2       | 3        |
|           10MB | 2         | 2        | 2       | 3        |

<a name="TEA"/>
##### TEA
- Block size: 8

- Key size: 16

- Rounds: 32

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 4         | 4        | 5       | -        |
|          100MB | 4         | 4        | 4       | 5        |
|           10MB | 4         | 4        | 4       | 4        |

<a name="KASUMI"/>
##### KASUMI
- Block size: 8

- Key size: 16

- Rounds: 8

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 3       | -        |
|          100MB | 2         | 2        | 2       | 2        |
|           10MB | 2         | 2        | 2       | 3        |

<a name="KUZNYECHIK"/>
##### KUZNYECHIK
- Block size: 16

- Key size: 32

- Rounds: 10

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 2       | -        |
|          100MB | 2         | 2        | 2       | 2        |
|           10MB | 2         | 2        | 2       | 3        |

<a name="MISTY1"/>
##### MISTY1
- Block size: 8

- Key size: 16

- Rounds: 4*n

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 2       | -        |
|          100MB | 1         | 1        | 2       | 2        |
|           10MB | 1         | 1        | 2       | 2        |

<a name="NOEKEON"/>
##### NOEKEON
- Block size: 16

- Key size: 16

- Rounds: 16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 3       | -        |
|          100MB | 2         | 2        | 3       | 3        |
|           10MB | 2         | 2        | 2       | 3        |

<a name="SHACAL2"/>
##### SHACAL2
- Block size: 32

- Key size: 16-64

- Rounds: 80

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 9         | 9        | 10      | -        |
|          100MB | 9         | 9        | 9       | 8        |
|           10MB | 8         | 9        | 9       | 8        |

<a name="XTEA"/>
##### XTEA
- Block size: 8

- Key size: 16

- Rounds: 32

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 5         | 4        | 5       | -        |
|          100MB | 4         | 4        | 5       | 5        |
|           10MB | 4         | 4        | 4       | 4        |

<a name="ARIA"/>
##### ARIA
- Block size: 16

- Key size: 16/24/32

- Rounds: 12/14/16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 3       | -        |
|          100MB | 2         | 2        | 2       | 2        |
|           10MB | 2         | 1        | 2       | 2        |

<a name="CAMELLIA"/>
##### CAMELLIA
- Block size: 16

- Key size: 16/24/32

- Rounds: 18 or 24

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 3       | -        |
|          100MB | 2         | 2        | 3       | 3        |
|           10MB | 2         | 2        | 2       | 3        |

<a name="CAST"/>
##### CAST
- Block size: 8

- Key size: 5-16

- Rounds: 12 or 16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 3         | 3        | 3       | -        |
|          100MB | 3         | 3        | 3       | -        |
|           10MB | 3         | 3        | 3       | -        |

<a name="IDEA"/>
##### IDEA
- Block size: 8

- Key size: 16

- Rounds: 8.5

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 1         | 1        | 1       | -        |
|          100MB | 1         | 1        | 1       | 1        |
|           10MB | 1         | 1        | 1       | 1        |

<a name="SEED"/>
##### SEED
- Block size: 16

- Key size: 16

- Rounds: 16

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 2       | -        |
|          100MB | 2         | 2        | 2       | 2        |
|           10MB | 2         | 2        | 2       | 2        |

#### Stream ciphers
<a name="HC-128"/>
##### HC-128
- Rounds: no (note 1)

<b><span style="color:red">Unfortunatelly, no test results are avaible.</span></b>

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Rabbit"/>
##### Rabbit
- Rounds: 0-4(4) (note 2)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Salsa20"/>
##### Salsa20
- Rounds: 0-20(20) (note 3)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="SOSEMANUK"/>
##### SOSEMANUK
- Rounds: 0-25 (25) (note 4)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Grain"/>
##### Grain
- Rounds: **1**-13 (13) (note 1)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | 2         | 2        | 3       | 0        |
|           10MB | 2         | 2        | 2       | 0        |

<a name="MICKEY"/>
##### MICKEY
- Rounds: 0-8

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Trivium"/>
##### Trivium
- Rounds: 0-9 (9)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="F-FCSR"/>
##### F-FCSR
- Rounds: **1**-5 (5)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | 1         | 1        | 1       | -        |
|           10MB | 2         | 1        | 1       | -        |

<a name="RC4"/>
##### RC4
- Rounds: not round-reduced

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | 1         | -        | 1       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Chacha"/>
##### Chacha
- Rounds: 0-20 (20)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | 2         | 2        | 3       | -        |
|           10MB | 2         | 2        | 3       | -        |

<a name="ABC"/>
##### ABC
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Achterbahn"/>
##### Achterbahn
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="CryptMT"/>
##### CryptMT
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="DECIM"/>
##### DECIM
- Rounds: 1-8 (8)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="DICING"/>
##### DICING
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Dragon"/>
##### Dragon
- Rounds: 0-16 `DRAGON_MIXING_STAGES`

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Edon80"/>
##### Edon80
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="F-FCSR"/>
##### F-FCSR
- Rounds: n/a

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | 1         | 1        | 1       | -        |
|           10MB | 2         | 1        | 1       | -        |

<a name="Frogbit"/>
##### Frogbit
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Fubuki"/>
##### Fubuki
- Rounds: 1-32 (4)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Grain"/>
##### Grain
- Rounds: 1-13 (13)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | 2         | 2        | 3       | 0        |
|           10MB | 2         | 2        | 2       | 0        |

<a name="Hermes"/>
##### Hermes
- Rounds: 1-13 (10)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="LEX"/>
##### LEX
- Rounds: 1-10 (10)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="MAG"/>
##### MAG
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="MICKEY"/>
##### MICKEY
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Mir-1"/>
##### Mir-1
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Moustique"/>
##### Moustique
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="NLS"/>
##### NLS
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Phelix"/>
##### Phelix
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Polar Bear"/>
##### Polar Bear
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Pomaranch"/>
##### Pomaranch
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Py"/>
##### Py
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Rabbit"/>
##### Rabbit
- Rounds: 1-4 (4) iterations of keystream preparation

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Salsa20"/>
##### Salsa20
- Rounds: 1-20 (20/12)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="SFINKS"/>
##### SFINKS
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="SOSEMANUK"/>
##### SOSEMANUK
- Rounds: 1-25 (25)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="SSS"/>
##### SSS
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="TRBDK3 YAEA"/>
##### TRBDK3 YAEA
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="TSC-4"/>
##### TSC-4
- Rounds: 1-32 (32)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="VEST"/>
##### VEST
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="WG"/>
##### WG
- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Zk-Crypt"/>
##### Zk-Crypt
- Rounds: -

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

#### Hash functions
<a name="Blake"/>
##### Blake
- Block size: 28, 32, 48, 64

- Rounds: 0-x (l<48 ? 14 : 16)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 1         | 1        | 1       | -        |
|          100MB | -         | -        | -       | 1        |
|           10MB | -         | -        | -       | 1        |

<a name="Grostl"/>
##### Grostl
- Block size: 1-64

- Rounds: l<=32 ? 0-10 (10) : 2-x (14)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 2         | 2        | 2       | -        |
|          100MB | 2         | 2        | 2       | 2        |
|           10MB | 2         | 2        | 2       | 2        |

<a name="JH"/>
##### JH
- Block size: 28, 32, 48, 64

- Rounds: 0-x (42)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 6         | 6        | 6       | -        |
|          100MB | 6         | 6        | 6       | 6        |
|           10MB | -         | -        | -       | 6        |

<a name="Keccak"/>
##### Keccak
- Block size: 28, 32, 48, 64

- Rounds: 0-24

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 3         | 2        | 3       | -        |
|          100MB | 2         | 2        | 2       | 3        |
|           10MB | 2         | 2        | 2       | 3        |

<a name="Skein"/>
##### Skein
- Block size: 1-64

- Rounds: 0-72 (80 for 128 B)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 3         | 3        | 4       | -        |
|          100MB | 3         | 3        | 3       | 1        |
|           10MB | 3         | 3        | 3       | 1        |

<a name="Abacus"/>
##### Abacus
- Block size: 1-x (?)

- Rounds: 1-280 (135)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="ARIRANG"/>
##### ARIRANG
- Block size: 28, 32, 48, 64

- Rounds: 0-4 (4)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Aurora"/>
##### Aurora
- Block size: 28, 32, 48, 64

- Rounds: 0-16 (17)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Cheetah"/>
##### Cheetah
- Block size: 28, 32, 48, 64

- Rounds: l<=32 ? 0-15 (16) : 0-11 (12)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="CubeHash"/>
##### CubeHash
- Block size: 8-512, divisible by 8

- Rounds: 0-x (8)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="DCH"/>
##### DCH
- Block size: 28, 32, 48, 64

- Rounds: 0-x (4)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="DynamicSHA"/>
##### DynamicSHA
- Block size: 28, 32, 48, 64

- Rounds: 0-16 (16)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="DynamicSHA2"/>
##### DynamicSHA2
- Block size: 28, 32, 48, 64

- Rounds: 1-17 (17)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="ECHO"/>
##### ECHO
- Block size: 1-x

- Rounds: 1-x l<=32 ? (8) : (10)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Hamsi"/>
##### Hamsi
- Block size: 28, 32, 48, 64

- Rounds: 0-x (l<=32 3 : 6)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Lesamnta"/>
##### Lesamnta
- Block size: 28, 32, 48, 64

- Rounds: 0-32 (32)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Luffa"/>
##### Luffa
- Block size: 28, 32, 48, 64

- Rounds: 0-8 (8)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="MD6"/>
##### MD6
- Block size: 1-64

- Rounds: 0-104 (104)

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 8         | 8        | 9       | -        |
|          100MB | 8         | 8        | 8       | 9        |
|           10MB | 8         | 8        | 8       | 9        |

<a name="SIMD"/>
##### SIMD
- Block size: 1-64

- Rounds: 0-4 (4)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Tangle"/>
##### Tangle
- Block size: 28, 32, 48, 64, 96, 128

- Rounds: 0-x (72, 80, 96, 112, 128, 144)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Twister"/>
##### Twister
- Block size: 4-64 (divisible by 4)

- Rounds: l<=32 ? 0-9 (9) : 0-10 (10)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Blender"/>
##### Blender
- Block size: any divsible by 2

- Rounds: 0-x (32)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="BMW"/>
##### BMW
- Block size: 28, 32, 48, 64

- Rounds: 0-16 (16)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Boole"/>
##### Boole
- Block size: 1-64

- Rounds: 0-x (16)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="CHI"/>
##### CHI
- Block size: 28, 32, 48, 64

- Rounds: 0-x (l<37.5 ? 20 : 40)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="CRUNCH"/>
##### CRUNCH
- Block size: 28, 32, 48, 64

- Rounds: 0-x (224)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="EDON"/>
##### EDON
- Block size: 28, 32, 48, 64

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="ESSENCE"/>
##### ESSENCE
- Block size: 16-64

- Rounds: 8-x (32)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Fugue"/>
##### Fugue
- Block size: 1-x (?)

- Rounds: ?? ( **5**,6,8,13)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Khichidi"/>
##### Khichidi
- Block size: 28, 32, 48, 64

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Lane"/>
##### Lane
- Block size: 28, 32, 48, 64

- Rounds: (6+3,8+4)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="MCSSHA3"/>
##### MCSSHA3
- Block size: 28, 32, 48, 64

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="MeshHash"/>
##### MeshHash
- Block size: 1-4095

- Rounds: (32)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="NaSHA"/>
##### NaSHA
- Block size: 28, 32, 48, 64

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Sarmal"/>
##### Sarmal
- Block size: 28, 32, 48, 64

- Rounds: l<=32 ? 0-16 (16) : 0-20 (20)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Shabal"/>
##### Shabal
- Block size: 24, 28, 32, 48, 64

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Shamata"/>
##### Shamata
- Block size: 28, 32, 48, 64

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="SHAvite3"/>
##### SHAvite3
- Block size: 28, 32, 48, 64

- Rounds: l<=32 ? 0-11 (12) : 0-14 (14)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="SpectralHash"/>
##### SpectralHash
- Block size: 16-64 (divisible by 4)

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="StreamHash"/>
##### StreamHash
- Block size: 28, 32, 48, 64

- Rounds: n/a

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Vortex"/>
##### Vortex
- Block size: 28, 32, 48, 64

- Rounds: 0-15 (15)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="WaMM"/>
##### WaMM
- Block size: 24-256 (divisible by 5)

- Rounds: 0-x (2)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Waterfall"/>
##### Waterfall
- Block size: 1-64 (divisible by 5)

- Rounds: 0-x (4+16)

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Tangle2"/>
##### Tangle2
- Block size: ?28, 32, 48, 64, 96, 128?

- Rounds: ?0-x (72, 80, 96, 112, 128, 144)?

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Gost"/>
##### Gost
- Block size: 32

- Rounds: 0-32

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 1         | 1        | 1       | -        |
|          100MB | 1         | 1        | 1       | 1        |
|           10MB | 1         | 1        | 1       | 1        |

<a name="MD5"/>
##### MD5
- Block size: 16

- Rounds: 0-64

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 10        | 9        | 13      | -        |
|          100MB | 10        | 9        | 9       | 11       |
|           10MB | 10        | 9        | 10      | 11       |

<a name="RIPMD160"/>
##### RIPMD160
- Block size: 20

- Rounds: 80

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="SHA1"/>
##### SHA1
- Block size: 20

- Rounds: 80

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | 13        | 12       | 15      | -        |
|          100MB | 12        | 12       | 13      | 12       |
|           10MB | 12        | 12       | 12      | 12       |

<a name="SHA2"/>
##### SHA2
- Block size: 32

- Rounds: 64

Unfortunatelly, no test results are avaible.

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | -        |
|           10MB | -         | -        | -       | -        |

<a name="Tiger"/>
##### Tiger
- Block size: 24

- Rounds: 23

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | -         | -        | -       | 0        |
|           10MB | -         | -        | -       | 0        |

<a name="Whirlpool"/>
##### Whirlpool
- Block size: 64

- Rounds: 10

| Length of data | Dieharder | NIST-STS | TestU01 | BoolTest |
| --------------:| --------- | -------- | ------- | -------- |
|            8GB | -         | -        | -       | -        |
|          100MB | 1         | 1        | 1       | 1        |
|           10MB | -         | -        | -       | 1        |

