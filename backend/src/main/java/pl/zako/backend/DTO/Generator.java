package pl.zako.backend.DTO;


public class Generator {
    int trial;
    boolean[] polynomial;
    boolean[] seed;


    public int getTrial() {
        return trial;
    }

    public void setTrial(int trial) {
        this.trial = trial;
    }

    public boolean[] getPolynomial() {
        return polynomial;
    }

    public void setPolynomial(boolean[] polynomial) {
        this.polynomial = polynomial;
    }

    public boolean[] getSeed() {
        return seed;
    }

    public void setSeed(boolean[] seed) {
        this.seed = seed;
    }
}
