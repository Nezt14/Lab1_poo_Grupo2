abstract class strategy {
    public useStrat():any{// nombre de la estrategia
        this.strat();
        this.stratResult();
    }
    protected abstract strat(): any;
    protected abstract stratResult(): any;
}

class noc extends strategy{// no se que hacer con esto xd
    protected strat() {
        
    }
    protected stratResult() {
        
    }
}