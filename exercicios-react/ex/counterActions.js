export function inc(e){
    return {
        type: 'INC'
    }
}

export function dec(e){
    return {
        type: 'DEC'
    }
}

export function stepChanged(e){
    return {
        type: 'STEP_CHANGE',
        payload: e.target.value
    }
}