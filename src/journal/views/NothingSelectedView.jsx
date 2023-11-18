
import { Grid, Typography, InputLabel, Input, FormControl, FormHelperText, TextField, Button } from '@mui/material';
import { StarOutlineOutlined, StartOutlined } from '@mui/icons-material';
import {useState} from 'react'

export const NothingSelectedView = () => {
    const [resultado, setResultado] = useState('');
  const [valuedispo, setValueDispo]=useState('')
  const [value, setValue]=useState('')
  const [habilitarbackup, setHabilitarbackup]=useState(true)
  const ejecutarPython = async () => {
    try {
      const opciones = {
        method: 'POST', // Método HTTP
        headers: {
          'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify({ param_comandos: value, param_dispo:valuedispo}), // Convertir el objeto a formato JSON
      };
      const response = await fetch('http://localhost:8000/configurar-dispositivo',opciones);
      const data = await response.json();
      const {Error}=data
      console.log(Error)
      setHabilitarbackup(Error)
      //setResultado(data);
      console.log(data);
    } catch (error) {
      console.error('Error al ejecutar el script de Python:', error);
    }
  };
// comentario
const ejecutarBackup = async () => {
  try {
    const opciones = {
      method: 'POST', // Método HTTP
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido
      },
      body: JSON.stringify({param_comandos:"", param_dispo: valuedispo}), // Convertir el objeto a formato JSON
    };
    const response = await fetch('http://localhost:8000/hacer-backup',opciones);
    const data = await response.json();
    const {Error}=data
    console.log(Error)
    setHabilitarbackup(Error)
    //setResultado(data);
    console.log(data);
  } catch (error) {
    console.error('Error al ejecutar el script de Python:', error);
    }
  };
// fin comentario
    return (
        < Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 100px)', backgroundColor: 'primary.main', borderRadius: 3}}
        >
           
            <Grid item xs={12}>
    <FormControl>
  <br/>
  <FormHelperText id="my-helper-text">Ingrese los datos de los dispositivos a configurar en el siguiente orden y separado <br/> por comas sin espacios y con un Enter al final de cada linea <br/> {"EJEMPLO---->"} IP del dispositivo,contraseña del router,usuario del router{"(192.168.1.0,cisco,Router1)"}</FormHelperText>
  <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          variant="filled"
          color="primary"
          value={valuedispo}
          onChange={(e)=> setValueDispo(e.target.value)}
        />
<FormHelperText id="my-helper-text">Ingrese los comandos a ejecutar <br/> separado por Enter </FormHelperText>
  <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          variant="filled"
          color="primary"
          value={value}
          onChange={(e)=> setValue(e.target.value)}
        />
 <Button onClick={ejecutarPython}>Enviar Configuraciones</Button>
        <p>{resultado}</p>
        
        {
        habilitarbackup == false?<Button onClick={ejecutarBackup}>Descargar Backup</Button>:<></>
        }
</FormControl>
                
            </Grid>
        </Grid>
    )
}
