## Simplified Setup Checklist for Receive-Only JS8Call

1. **Install SDR# and Complete Setup**: Install SDR Software, install appropriate drivers for your SDR dongle.
2. **Open VBCable**: Download VBAudio Cable, open the .exe file, and install the driver.
3. **Insert SDR, launch Driver Replacement**: Plug in your antenna to the SDR, and insert your SDR into an
open USB port, and use the Zadig software to install the proper driver for your SDR (the Windows operating
system will automatically install the incorrect driver for most SDRs, so Zadig is needed to correct this
mistake).
4. **Note Com Port**: With your SDR dongle inserted into your PC, open Device Manager and ensure that your
SDR shows up under Ports. Note the Comm Port number.
5. **Open SDR#**: Confirm the SDR is working by clicking Settings -> Device, and from the drop down menu,
select your SDR device. You should see signals coming in on the waterfall. This program is necessary to
receive signals using your SDR (if you don’t want to use FLRig/FLDigi). You can pipe the audio from SDR#
directly into JS8Call using VBCable.
6. **Install and open BKTTimeSync**: This will sync your PC clock to the most accurate time. This is required
forJS8Call to decode messages. This app will require an internet connection (not ideal) or a GPS dongle/
internal GPS on your computer/tablet. Alternatively, you can use the Automatic Time Drift function in JS8.
7. **Install and Open JS8Call**: Follow the prompts for installation. When prompted to select a rig, choose
“none”. Open File -> Settings -> Audio, and under the Input drop down menu, make sure to select the VBAudio
OUTPUT. Remember, your SDR (using the VBAudio cable software) is OUTPUTTING audio, which needs
to be piped in to the INPUT of JS8Call. This “connects” the audio cable so that JS8Call can hear the audio
signals that are being received by your SDR. You should now begin decoding JS8 signals.
8. **Install and open FLRig and FLDigi**: These software packages can be set up in a similar fashion as
JS8Call. FLDigi can be used to send and receive RTTY messages (along with many other data modes). A
receive-only arrangement can be established using FLDigi as well.