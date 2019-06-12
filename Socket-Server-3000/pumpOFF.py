import RPi.GPIO as gp
gp.setmode(gp.BCM)
gp.setup(4,gp.OUT)
gp.output(4,gp.HIGH)