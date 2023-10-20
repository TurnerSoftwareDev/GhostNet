## Needed Software

1. **A simple SDR software package:** A common option is SDR# (also known as SDRSharp). This will be used
for a variety of tasks, but mostly to ensure that your HF antenna and audio settings are functional.
2. **Virtual Audio Cable:** A common option is VBAudio Cable. Radio signals are received by your SDR, where
they are displayed as audio. That audio has to be input into the appropriate software in order to be decoded.
If your radio isn’t “piped in” to software that will hear it, no communications will be heard. Since our SDR is
a device plugged in to a USB hub, we have to make this connection virtually, with software. VBAudio cable
is a simple software package to allow the audio from the SDR, to be input into JS8Call, instead of coming
out of your computer’s speakers.
3. **JS8Call:** The main software package for decoding the bulk of our GhostNet signals, which use the JS8
protocol. This program will decode the audio that is fed into it (the audio that comes from your SDR) and
decode those digital signals into plain text.
4. **FLRig and FLDigi:** Supplementary software that is similar to JS8 in that it decodes signals, but
instead of decoding the JS8 protocol, FLDigi decodes a variety of other signals, such as Ratio Teletype or
RTTY. This software will be needed for GhostNet comm windows that require decoding RTTY.
5. **BKTTimeSync:** Software to set your computer’s time to accurate GPS time. Necessary to decode
JS8Call messages which rely on a very accurate clock.
6. **Zadig:** Software to install the proper driver for your SDR device.