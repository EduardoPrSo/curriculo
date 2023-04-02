export default function ExperienceLevel({level}) { 
    const divs = [];
    const levels = {
        1: 'Iniciante',
        2: 'Básico',
        3: 'Intermediário',
        4: 'Avançado',
        5: 'Fluente',
    }

    for (let i = 0; i < 5; i++) {
      divs.push(<div key={i} style={{backgroundColor: i < level ? '#f7f7f7' : 'grey', width: '8px', height: '8px', borderRadius: '50%'}} />);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-end'}}>
            <div style={{display: 'flex', gap: '1px'}}>
            {divs}
            </div>
            <p style={{fontSize: '11px'}}>{levels[level]}</p>
        </div>
    )
}