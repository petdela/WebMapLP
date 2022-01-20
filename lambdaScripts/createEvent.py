import json
import boto3
import base64

rds_client = boto3.client('rds-data')
database_name = 'eventos'
db_cluster_arn = 'arn:aws:rds:us-east-1:743778454509:cluster:database-1'
db_credentials_secrets_store_arn = 'arn:aws:secretsmanager:us-east-1:743778454509:secret:rds-db-credentials/cluster-W7UEIIXVD6MYI3U2VECVNV6TZM/admin-xEsGxA'

def lambda_handler(event, context):
    print(event)
    data = json.loads(event['body'])['nombre']
    #message = "I love my {}".format(data)
    #print(message)
    #return message
    body = json.loads(event['body'])
    print(body)
    nombre = body['nombre']
    ubicacion = body['ubicacion']
    descripcion = body['descripcion']
    fecha = body['fecha']
    categoriaId = body['categoriaId']
    usuarioId = body['usuarioId']
    #response = body
    response = execute_statement("Insert into Evento (nombre, ubicacion, descripcion,categoriaid, usuarioid) values('{0}', '{1}', '{2}', {3}, {4});".format(nombre, ubicacion, descripcion, int(categoriaId), int(usuarioId)))
    print(response)
    return response
    
    
def execute_statement(sql):
    response = rds_client.execute_statement(
        secretArn=db_credentials_secrets_store_arn,
        database=database_name,
        resourceArn=db_cluster_arn,
        sql=sql
    )
    return response